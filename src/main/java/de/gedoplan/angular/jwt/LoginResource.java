package de.gedoplan.angular.jwt;

import de.gedoplan.angular.jwt.entity.LoginEntity;
import de.gedoplan.angular.jwt.service.JWTService;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import javax.inject.Inject;

/**
 * Login Resource. Prüft (statisch) Username und Passwort und generriert einen JWT Token.
 *
 * @author Dominik Mathmann, GEDOPLAN
 */
@Path("login")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.TEXT_PLAIN)
public class LoginResource {

  @Inject
  JWTService jwtService;

  @POST
  public Response login(LoginEntity login) {
    if (login.getUsername().equals("demo") && login.getPassword().equals("secret")) {
      return Response.status(200).entity(jwtService.generateJWTToken(login.getUsername())).build();
    } else {
      return Response.status(Response.Status.UNAUTHORIZED).build();
    }
  }

}
