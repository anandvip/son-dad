var waves = new SineWaves({
    el: document.getElementById('waves'),
    
    speed: 1,
    
    width: function() {
      return $(window).width();
    },
    
    height: function() {
      return $(window).height();
    },
    
    ease: 'SineInOut',
    
    wavesWidth: '70%',
    
    waves: [
      {
        timeModifier: 2,
        lineWidth: 3,
        amplitude: -225,
        wavelength: 115
      },
      {
        timeModifier: 1,
        lineWidth: 2,
        amplitude: -150,
        wavelength: 50
      },
      {
        timeModifier: 1,
        lineWidth: 1,
        amplitude: -200,
        wavelength: 70
      },
      {
        timeModifier: .61,
        lineWidth: 1,
        amplitude: -411,
        wavelength: 820
      },
      {
        timeModifier: 1.55,
        lineWidth: 2,
        amplitude: -200,
        wavelength: 800
      }
    ],
   
    // Called on window resize
    resizeEvent: function() {
      var gradient = this.ctx.createLinearGradient(0, 0, this.width, 0);
      gradient.addColorStop(0,"rgba(23, 210, 168, 0.2)");
      gradient.addColorStop(0.5,"rgba(255, 255, 255, 0.5)");
      gradient.addColorStop(1,"rgba(23, 210, 168, 0.2)");
      
      var index = -1;
      var length = this.waves.length;
        while(++index < length){
        this.waves[index].strokeStyle = gradient;
      }
      
      // Clean Up
      index = void 0;
      length = void 0;
      gradient = void 0;
    }
  });
