<div align="center">
  <img alt="vueje" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Ionic_Logo.svg/1280px-Ionic_Logo.svg.png" width="400">
  <h1>Geolocation 🛰️</h1>

  <p>Web application made with VueJS.</p>
</div>

## Resources 📝

* [Ionic](https://ionicframework.com/)
* [Cordova Background Geolocation](https://github.com/transistorsoft/cordova-background-geolocation-lt)

I'd highly recommend reading through some of the Ionic and Cordova Background Geolocaiton documentation.

## Project 🚧

This mobile application is a small prototype to see how background geolocation works on Ionic. The application is based on this [repo](https://github.com/transistorsoft/cordova-background-geolocation-lt#ionic-2-with-typescript).

## Requirements 📄

To use this mobile application you will need Ionic.

### Node

- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
  Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v10.14.2

    $ npm --version
    6.4.1

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

---

## Install 📥

    $ git clone https://github.com/b0rdjack/ionic-geolocation.git
    $ cd ionic-geolocation
    $ npm install

## Running the project 🚀

    $ ionic serve

## Build the project 🔨

    $ ionic build android
    $ ionic build ios
