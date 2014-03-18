# Ag Heritage Museum
### Static HTML, CSS, and JavaScript template for Ag Heritage Museum using the Foundation 5 framework

## Getting Started

1. Clone the repo.
2. Run the following shell commands (if the condition applies):
  - `npm install -g grunt-cli` (if running `grunt -v` returns an error)
  - `gem install compass` (if running `compass -v` returns an error)
  - `npm install` (if the assembling branch doesn't contain a node_modules directory)
  - `bower install` (if the assembling branch doesn't contain a bower_modules directory)
3. Check out a new branch (off `master`) to begin your work.
4. Write code!
5. Push your commits back to `master` once the feature is complete.

## Using Grunt

### tl;dr

- Run `grunt` to compile the site's CSS and assemble its webpages (once). (If you only need one of those, run `grunt compass` or `grunt assemble`, respectively).
- Run `grunt watch` to have Grunt to the above commands whenever you save a change.
- Run `grunt server` to launch a webserver.
- `watch` and `server` should be done from separate windows or tabs, since they'll continue to run until you close them.

### Some context

Much of the code and the files in this repository are for *building* the Ag Heritage website, not the actual website and its components (those are in *ahem* build/). The tool we're using to do that is called Grunt.

Grunt can do all kinds of things, but for our purposes, it can do all the "tasks" defined in the [Gruntfile.js](https://github.com/SDState/ag-heritage-prototype/blob/master/Gruntfile.js) file. These include assembling our Handlebars pages, partials, and layouts into proper HTML webpages, compiling our Sass into proper CSS, and launching a local webserver to view the files.

You can browse the individual tasks from that file. Each one is defined as an object literal passed to Grunt's `initConfig()` method (except `pkg`--that's Grunt loading the local npm configuration).

Broader Grunt tasks, ones that can combine several tasks into a single command, are defined at the end of the file as calls to Grunt's `registerTask()` method. The first argument is the task name (say, 'default'). The second is the individual tasks to run (in that order) when that command is issued.
