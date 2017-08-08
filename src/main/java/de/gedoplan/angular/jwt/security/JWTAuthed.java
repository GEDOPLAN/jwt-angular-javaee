package de.gedoplan.angular.jwt.security;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import static java.lang.annotation.RetentionPolicy.RUNTIME;
import java.lang.annotation.Target;

/**
 * JWT-Annotation für die Methoden die mittels Filter geprüft werden sollen.
 *
 * @author Dominik Mathmann, GEDOPLAN
 */
@javax.ws.rs.NameBinding
@Retention(RUNTIME)
@Target({ ElementType.TYPE, ElementType.METHOD })
public @interface JWTAuthed {
}
