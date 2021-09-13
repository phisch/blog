# blog.phisch.codes
This is the source of my blog hosted on blog.phisch.codes

## Setup locally
[Install ruby](https://www.ruby-lang.org/en/documentation/installation/) 3.0 or higher. 

Set the `GEM_HOME` environment variable, and add its `bin` dir to your path (in `~/.profile` or `~/.zshrc`):

```sh
export GEM_HOME="$(ruby -e 'puts Gem.user_dir')"
export PATH="$PATH:$GEM_HOME/bin"
```

Install the `jekyll` and `bundler` gems:

```sh
gem install jekyll bundler
```

Clone this repository and install its dependencies using `bundler`:

```
git clone git@github.com:phisch/blog.git
cd blog
bundle install
```

And finally, serve the blog:

```sh
bundle exec jekyll serve --livereload
```
