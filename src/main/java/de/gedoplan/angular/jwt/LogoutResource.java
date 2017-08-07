package de.gedoplan.angular.jwt;

import de.gedoplan.angular.jwt.service.JWTService;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import javax.inject.Inject;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.HttpHeaders;

@Path("logout")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.TEXT_PLAIN)
public class LogoutResource {

  @Inject
  JWTService jwtService;

  @POST
  public void logout(@Context HttpHeaders headers) {
    this.jwtService.removeToken(headers.getHeaderString(HttpHeaders.AUTHORIZATION));
  }

}
