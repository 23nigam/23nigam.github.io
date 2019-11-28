var typed = new Typed("#auto-typing-terminal", 
    {
      strings: ["Here's my take on a few shell commands. Type help to get started"],
      typeSpeed : 50 
    }
);
var shell = $('.shell');
var path = [];
var commands = {
    mv: function() {
        this.echo('Nigam is open to relocating anywhere in the Solar System');
    },
    ls: function() {
        this.echo('Nigam works as a Software Engineer(Associate) at Goldman Sachs');
    },
    cat: function() {
        this.echo('Nigam does not like Cats');
    },
    help: function() {
        this.echo('Available commands: ' + Object.keys(commands).join(', '));
    }
};
var term = $('.content').terminal(commands, {
    prompt: prompt(),
    completion: function(string, callback) {
        var command = this.get_command();
        var cmd = $.terminal.parse_command(command);
        if (cmd.name === 'ls') {
            callback([]);
        } else if (cmd.name === 'cd') {
            var dirs = Object.keys(cwd.children).filter(function(key) {
                return is_dir(cwd.children[key]);
            });
            callback(dirs);
        } else if (cmd.name === 'cat') {
            var files = Object.keys(cwd.children).filter(function(key) {
                return is_file(cwd.children[key]);
            });
            callback(files);
        } else {
            callback(Object.keys(commands));
        }
    },
    // detect iframe codepen preview
    enabled: $('body').attr('onload') === undefined,
});
if (!term.enabled()) {
    term.find('.cursor').addClass('blink');
}
function prompt(type) {
    return function(callback) {
        var prompt;
        if (type === 'windows') {
            prompt = 'C:\\' + path.join('\\') + '> ';
        } else {
            prompt = 'guest@nigamshah.dev:/' + path.join('/') + '$ ';
        }
        $('.title').html(prompt);
        callback(prompt);
    };
}
$('.typed-cursor').hide();
$('.terminal-output').empty();
