/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


Router.configure({
  layoutTemplate: 'mainLayout'
});

Router.route('/', {
  name: 'root',
  controller: 'MainPageController'
});