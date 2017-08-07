package de.gedoplan.angular.jwt.entity;

import java.util.List;

/**
 *
 * @author Dominik Mathmann
 */
public class LoginEntity {

  private String username;

  private String password;

  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

}
