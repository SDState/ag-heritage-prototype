# Ag Heritage Museum
### Static HTML, CSS, and JavaScript template for Ag Heritage Museum using the Foundation 5 framework

## Getting Started

These instructions assume you have Git and Node installed.

2. If it isn't already, install [Grunt]: `npm install -g grunt-cli`.
3. If it isn't already, install [Bower]: `npm install -g bower`.
1. Clone the repo.
2. Inside that folder, run `npm install && bower install`.
3. Check out a new branch (from `master`) to begin your work.
4. Write code!
5. Merge your commits back into *master* and push to the server with `git push` once the feature is complete.

If you or anyone on your team is interested in building or serving the Ag Heritage prototype site locally, I wanted to share some things you'll need installed locally beforehand.
Git and Node.js installed locally.
Clone the repo and within that, run `npm install && bower install` to fetch the dependencies.
After that, `grunt serve` will initiate a build, launch a local Connect server, open your default browser to a tab with the local site open, and watch for further changes, at which point Grunt recompiles the site and relaunched the browser for you automatically. It's pretty neat.to


## Using Grunt

### tl;dr

- Run `grunt` to compile the site's CSS, copy and concatenate any assets, and assemble its webpages (once). (If you only need one of those, run the appropriate task from the [Gruntfile](Gruntfile.js)).
- Run `grunt serve` to initiate a build, launch a local Connect server, open your default browser to a tab with the local site open, and watch for further changes, at which point Grunt recompiles the site and relaunches the browser for you automatically. It's pretty neat.

### Some context

Much of the code and the files in this repository are for *building* the Ag Heritage website, the the site itself.

* Source code resides in app/.
* The actual website and its components are in *ahem* build/.
* Files and things related to build process itself reside in the root directory.

The tool we're using to do all this is called [Grunt].

Grunt can do all kinds of things, but for our purposes, it can do all the "tasks" defined in the [Gruntfile.js](https://github.com/SDState/ag-heritage-prototype/blob/master/Gruntfile.js) file. These include assembling our Handlebars pages, partials, and layouts into proper HTML webpages; compiling our Sass into proper CSS; and launching a local webserver to view the compiled website.

You can browse the individual tasks from that file. Each one is defined as an object literal passed to Grunt's `initConfig()` method (except `pkg`--that's Grunt loading the local npm configuration from [package.json](package.json)).

Broader Grunt tasks, ones that can combine several tasks into a single command, are defined at the end of the file as calls to Grunt's `registerTask()` method. The first argument is the task name (say, 'default'). The second is the individual tasks to run (in that order) when that command is issued.

[Bower]:http://bower.io
[Grunt]:http://gruntjs.com
