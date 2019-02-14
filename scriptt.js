SC.initialize({
  client_id: 'a3e059563d7fd3372b49b37f00a00bcf'

});


$(document).ready(function() {
//kaatril or vaarthai
  SC.stream('/tracks/521213439', function(sound) {
    $('#start').click(function(e) {
      e.preventDefault();
      sound.start();
    });
    $('#stop').click(function(e) {
      e.preventDefault();
      sound.stop();
    });
  });
//malargal keadden
  SC.stream('/tracks/520275384', function(sound) {
    $('#start1').click(function(e) {
      e.preventDefault();
      sound.start();
    });
    $('#stop1').click(function(e) {
      e.preventDefault();
      sound.stop();
    });
  });

//munbe vaa
  SC.stream('/tracks/345823373', function(sound) {
    $('#start2').click(function(e) {
      e.preventDefault();
      sound.start();
    });
    $('#stop2').click(function(e) {
      e.preventDefault();
      sound.stop();
    });
  });

// Saral Veesidum Neram

  SC.stream('/tracks/506588463', function(sound) {
    $('#start3').click(function(e) {
      e.preventDefault();
      sound.start();
    });
    $('#stop3').click(function(e) {
      e.preventDefault();
      sound.stop();
    });
  });

//Kannamma


  SC.stream('/tracks/456451329', function(sound) {
    $('#start4').click(function(e) {
      e.preventDefault();
      sound.start();
    });
    $('#stop4').click(function(e) {
      e.preventDefault();
      sound.stop();
    });
  });


//Adiyae Azhagae
  SC.stream('/tracks/342751441', function(sound) {
    $('#start5').click(function(e) {
      e.preventDefault();
      sound.start();
    });
    $('#stop5').click(function(e) {
      e.preventDefault();
      sound.stop();
    });
  });



//En Jeevan
  SC.stream('/tracks/407997912', function(sound) {
    $('#start6').click(function(e) {
      e.preventDefault();
      sound.start();
    });
    $('#stop6').click(function(e) {
      e.preventDefault();
      sound.stop();
    });
  });


//Yeno Yeno
  SC.stream('/tracks/418432744', function(sound) {
    $('#start7').click(function(e) {
      e.preventDefault();
      sound.start();
    });
    $('#stop7').click(function(e) {
      e.preventDefault();
      sound.stop();
    });
  });


//Nenjukkule
  SC.stream('/tracks/313366941', function(sound) {
    $('#start8').click(function(e) {
      e.preventDefault();
      sound.start();
    });
    $('#stop8').click(function(e) {
      e.preventDefault();
      sound.stop();
    });
  });

//En Jeevan
  SC.stream('/tracks/495538437', function(sound) {
    $('#start9').click(function(e) {
      e.preventDefault();
      sound.start();
    });
    $('#stop9').click(function(e) {
      e.preventDefault();
      sound.stop();
    });
  });

    SC.stream('/tracks/321949442', function(sound) {
      $('#start10').click(function(e) {
        e.preventDefault();
        sound.start();
      });
      $('#stop10').click(function(e) {
        e.preventDefault();
        sound.stop();
      });
    });

      SC.stream('/tracks/270905820', function(sound) {
        $('#start11').click(function(e) {
          e.preventDefault();
          sound.start();
        });
        $('#stop11').click(function(e) {
          e.preventDefault();
          sound.stop();
        });
      });


});
