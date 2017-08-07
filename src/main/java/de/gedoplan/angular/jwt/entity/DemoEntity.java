package de.gedoplan.angular.jwt.entity;

/**
 *
 * @author Dominik Mathmann
 */
public class DemoEntity {

  private Integer id;

  private String message;

  public DemoEntity(Integer id, String message) {
    this.id = id;
    this.message = message;
  }

  public DemoEntity() {
  }

  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public String getMessage() {
    return message;
  }

  public void setMessage(String message) {
    this.message = message;
  }

}
