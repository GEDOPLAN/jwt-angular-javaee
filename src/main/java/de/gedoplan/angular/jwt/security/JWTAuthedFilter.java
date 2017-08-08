
import de.gedoplan.angular.jwt.security.JWTAuthed;
import de.gedoplan.angular.jwt.service.JWTService;
import java.io.IOException;
import javax.annotation.Priority;
import javax.inject.Inject;
import javax.ws.rs.Priorities;
import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.container.ContainerRequestFilter;
import javax.ws.rs.core.HttpHeaders;
import javax.ws.rs.core.Response;
import javax.ws.rs.ext.Provider;

/**
 * JWT-Filter der das vorhandensein und die gültigkeit des JWT Tokens prüft.
 *
 * @author Dominik Mathmann, GEDOPLAN
 */
@Provider
@JWTAuthed
@Priority(Priorities.AUTHENTICATION)
public class JWTAuthedFilter implements ContainerRequestFilter {

  @Inject
  private JWTService jwtService;

  @Override
  public void filter(ContainerRequestContext requestContext) throws IOException {
    String token = requestContext.getHeaderString(HttpHeaders.AUTHORIZATION);

    try {
      jwtService.valid(token.split(" ")[1]);

    } catch (Exception e) {
      requestContext.abortWith(Response.status(Response.Status.UNAUTHORIZED).build());
    }
  }
}