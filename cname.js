import ghpages from 'gh-pages';
import fs from 'fs';

fs.writeFile('dist/CNAME', "www.ricosoftworks.com", function(err) {});
ghpages.publish('dist', function(err) {});