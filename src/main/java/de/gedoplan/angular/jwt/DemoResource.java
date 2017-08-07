package de.gedoplan.angular.jwt;

import de.gedoplan.angular.jwt.entity.DemoEntity;
import de.gedoplan.angular.jwt.security.JWTAuthed;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("demo")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class DemoResource {

  @GET
  @JWTAuthed
  public DemoEntity getHello() {
    return new DemoEntity(1, "Hello World");
  }
}
