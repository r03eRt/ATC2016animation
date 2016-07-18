(function($) {

    /**
     * Colors before reset
     * orange - #F8AD43
     * red - #F8876E
     * green - #73C996
     *
     * meter Bcg - #C6D7DF to #5AB783
     * meter Stroke - #C6D7DF to #5AB783
     *
     * Light-left - #F8AD43
     * Light-mid - #F8876E
     * Light-right - #5AB783
     *
     *
     * **/

     var $Bg = $('#Bg'),
     $Fila_1_edificios = $('#Fila_1_edificios'),
     $Linea_suelo = $('#Linea_suelo rect')
     $Pin_peque_1 = $('#Pin_peque_1'),
     $Pin_peque_2 = $('#Pin_peque_2'),
     $Pin_peque_3 = $('#Pin_peque_3'),
     $Pin_Grande = $('#Pin_Grande'),
     $Casa_Pequeña = $('#Edificio_x5F_1'),
     $Fondo_Casa_Pequeña = $('#Fondo_Casa_Pequeña'),
     $Fondo_Edifico_Grande = $('#Fondo_Edifico_Grande'),
     $Edifico_Grande = $('#Edificio_x5F_2'),
     $Edificio_fondo_1 = $('#edificio_fondo_1'),
     $Edificio_fondo_2 = $('#edificio_fondo_2'),
     $Edificio_fondo_3 = $('#edificio_fondo_3'),
     $Edificio_fondo_4 = $('#edificio_fondo_4'),
     $Edificio_fondo_5 = $('#edificio_fondo_5'),
     $Edificio_fondo_6 = $('#edificio_fondo_6')
     ;



          function getSetupTL () {
               var setupTL = new TimelineMax();

               setupTL
                    .set($Fila_1_edificios, {autoAlpha: 1, scale: 1})
                    .set([$Casa_Pequeña, $Edifico_Grande, $Edificio_fondo_1, $Edificio_fondo_2, $Edificio_fondo_3, $Edificio_fondo_4, $Edificio_fondo_5, $Edificio_fondo_6, $Fondo_Casa_Pequeña], {autoAlpha: 0, scale: 0, transformOrigin: 'center bottom'})
                    .set($Linea_suelo, {width: '0px'})
                    .set($Pin_peque_1, {autoAlpha: 0, y: '-200'})
                    .set($Pin_peque_2, {autoAlpha: 0, y: '-200'})
                    .set($Pin_peque_3, {autoAlpha: 0, y: '-200'})
                    .set($Pin_Grande, {autoAlpha: 0, y: '-200'})

               return setupTL;

          }




          function getDrawTL1() {
               var drawTL1 = new TimelineMax()

               drawTL1
                    .to($Linea_suelo, 1, {width: '2360px', ease: Power3.easeInOut})
                    .to($Casa_Pequeña, 0.8, {scale:1, autoAlpha: 1, ease: Bounce.easeOut})
                    .to($Fondo_Casa_Pequeña, 0.8, {scale:1, autoAlpha: 1, ease: Bounce.easeOut}, '-=0.8')
                    .to($Pin_Grande, 0.5, {autoAlpha: 1, y: '+=200' ,ease: Bounce.easeOut}, '+=0.2')
                    .to($Pin_Grande, 1, {autoAlpha: 1, y: '-=60' , repeat: -1, yoyo: true})

                    /*.fromTo($Edifico_Grande, 0.8, {scale:0, ease: Power3.easeInOut, transformOrigin: 'center bottom'}, {scale:1, ease: Bounce.easeOut})/*.to($Pin_peque_1, 0.5, {autoAlpha: 1, y: '+=200' ,ease: Bounce.easeOut}, '+=0.2')
                    .to($Pin_peque_2, 0.5, {autoAlpha: 1, y: '+=200' ,ease: Bounce.easeOut}, '+=0.2')
                    .to($Pin_peque_3, 0.5, {autoAlpha: 1, y: '+=200' ,ease: Bounce.easeOut}, '+=0.2');*/

                return drawTL1;
          }


          function getDrawTL2() {
               var drawTL2 = new TimelineMax()

               drawTL2
                    .to($Edifico_Grande, 1, {scale:1, autoAlpha: 1, ease: Bounce.easeOut}, '+=3')
                    .to($Fondo_Edifico_Grande, 1, {scale:1, autoAlpha: 1, ease: Bounce.easeOut}, '-=1')


                return drawTL2;
          }

          function getDrawTL3() {
               var drawTL3 = new TimelineMax()


               drawTL3
                    .to(edificio_fondo_1, 0.9, {scale:1, autoAlpha: 1, ease: Bounce.easeOut}, '+=4')
                    .to(edificio_fondo_2, 0.9, {scale:1, autoAlpha: 1, ease: Bounce.easeOut}, '-=0.4')
                    .to(edificio_fondo_3, 0.9, {scale:1, autoAlpha: 1, ease: Bounce.easeOut}, '-=0.4')
                    .to(edificio_fondo_4, 0.9, {scale:1, autoAlpha: 1, ease: Bounce.easeOut}, '-=0.4')
                    .to(edificio_fondo_5, 0.9, {scale:1, autoAlpha: 1, ease: Bounce.easeOut}, '-=0.4')
                    .to(edificio_fondo_6, 0.9, {scale:1, autoAlpha: 1, ease: Bounce.easeOut}, '-=0.4')
                    .to($Pin_peque_1, 0.5, {autoAlpha: 1, y: '+=200' ,ease: Bounce.easeOut}, '+=0.2')
                    .to($Pin_peque_2, 0.5, {autoAlpha: 1, y: '+=200' ,ease: Bounce.easeOut}, '+=0.2')
                    .to($Pin_peque_3, 0.5, {autoAlpha: 1, y: '+=200' ,ease: Bounce.easeOut}, '+=0.2')
                    .to([$Pin_peque_1, $Pin_peque_2, $Pin_peque_3], 1,{ y: '-=60', immediateRender: false, repeat: -1, yoyo:true}, '-=0.2')
;

                return drawTL3;
          }

          function getFinalTL() {
               var FinalTL = new TimelineMax();

               var FinalTL = new TimelineMax({repeat: -1, yoyo:true});

               FinalTL
                  .to($Pin_peque_1, 1,{ y: '-=60', immediateRender: false, repeat: -1, yoyo:true});

               return FinalTL;
          }





          function initTimeline () {
               var mainTl = new TimelineMax();

               mainTl
                    .add(getSetupTL, 'setup-timeline')
                    .add(getDrawTL1, 'drawTL1')
                    .add(getDrawTL2, 'drawTL2')
                    .add(getDrawTL3, 'drawTL3')
                    .add(getFinalTL, 'finalTL', '+=9');


          }



initTimeline();




}(jQuery));