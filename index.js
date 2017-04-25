var packer = require('gamefroot-texture-packer');

packer('./assets/*.png', {format: 'starling'}, function (err) {
  if (err) throw err;

  console.log('spritesheet successfully generated');
});