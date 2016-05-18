/**
 * Created by alexei on 5/18/16.
 */
import name from '../name';

class RegistrationController {

  register($scope) {
    this.message = `Welcome ${this.user.firstname}`;
  }
}

angular.module(name).controller('deepRegistrationController', [function($scope) {
  return new RegistrationController($scope);
}]);