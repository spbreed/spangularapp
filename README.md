spangularapp
============
Presentation and training videos of this project is available here:
[![presentation](https://spbreed.files.wordpress.com/2014/11/protractor.png?w=676)](https://spbreed.github.io/index.html)

http://spbreed.github.io/index.html

BDD (Behaviour Driven Development) and TDD ( Test Driven Development) has become cornerstone for modern Javascript app development but adopting these development strategies to SharePoint/Office 365 is not a trivial task.

I was intrigued to discover #Protractor, an AngularJS testing framework. With client side MVC/MVVM frameworks getting popular among the developers, AngularJS is the premier framework to develop Office365/SharePoint 2013 apps. Integrating TDD methodologies to app development model will help developers to deliver maintainable, flexible and extensible solutions and interfaces.

This repo have two projects
1. ExpensesAngularApp
2. ExpensesAngularApp test

1. Expenses AngularApp:
=======================
  - This is a SharePoint hosted app developed using popular angular framework. 
  - Utilizes best patterns and practises for angular framework based on [HotTowel framework](https://github.com/johnpapa/HotTowel-Angular) and [Learning-Path-Manager-Code-Sample](https://github.com/OfficeDev/Learning-Path-Manager-Code-Sample) from Andrew Connell.
  - Uses ShareCoffee Javascript library to make REST calls to SharePoint
  - Available as a [nuget package](https://www.nuget.org/packages/SPAngularAppTemplate/) for easy install

2. ExpensesAngularApp test:
=======================
  - This Project runs on NodeJS and executes End to End testing on Expenses Angular App
  - Utilizes [Protractor](https://github.com/angular/protractor) framework to do E2E testing 
  - [Jasmine](https://github.com/pivotal/jasmine) is used to write test specs

