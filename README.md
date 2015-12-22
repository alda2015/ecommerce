# ecommerce

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.15.1.

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.

# Before run
add this to httdp.conf (Windows) or site-enabled/000-default.conf (linux)
 `<VirtualHost *:80>
    ProxyPass /ws http://localhost:8080
    <Location /ws>
     ProxyPassReverse http://localhost:8080
    </Location>   
</VirtualHost>`
