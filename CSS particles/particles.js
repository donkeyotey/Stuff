var particles = (function() {
    
    var
    vars = {
        count         : 0,
        isRunning     : false,
        max           : 35,
        mouseX        : null,
        mouseY        : null,
        stage         : document.getElementById('stage'),
        timerAddPart  : null,
        timerStopPart : null
    },
    
    methods = {
        addParticles   : function() {
            
            vars.timerAddPart = setTimeout(methods.makeParticle, 100);
            vars.isRunning    = true;
        },
        makeParticle   : function() {
                
            var particle1 = document.createElement('div');
            
            particle1.setAttribute('class', 'particle');
            
            particle1.setAttribute('style', 'left: ' + vars.mouseX + 'px; top: ' + vars.mouseY + 'px;');
            
            vars.stage.insertBefore(particle1, vars.stage.firstChild);
            
            vars.count ++;
            
            if(vars.count >= vars.max + 1) {
                
                vars.stage.removeChild(vars.stage.lastChild);
            }
            
            vars.timerStopPart = setTimeout(methods.stopParticles, 200);
            
            methods.addParticles();
        },
        mouseMove      : function() {
                
            vars.moveIt = document.onmousemove = function(e){
                        
                vars.mouseX = e.pageX;
                vars.mouseY = e.pageY;
                
                clearTimeout(vars.timerStopPart);
                
                if(!vars.isRunning) { methods.addParticles(); }
            }
        }(),
        stopParticles     : function() {
            
            clearTimeout(vars.timerAddPart);
            vars.isRunning = false;
        }
    }
    
    vars.stage.addEventListener('mouseenter', function() {
    
        methods.addParticles();
        
    }, false);
    
    vars.stage.addEventListener('mouseleave', function() {
    
        methods.stopParticles();
        
    }, false);
    
    return false;    

})();




