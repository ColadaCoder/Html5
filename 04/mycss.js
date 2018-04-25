
function cssTransform(obj,attr,val){
    if(!obj.transform){
        obj.transform={};
    }
    if(arguments.length===3){
        obj.transform[attr]=val;
        var str='';
        for(var key in obj.transform){
            switch (key) {
                case 'rotate':
                    break;
                case 'rotateX':
                case 'rotateY':
                    str += key +'('+obj.transform[key]+'deg)';
                    break;
                case 'translate':
                case 'translateX':
                case 'translateY':
                    str += key + '('+obj.transform[key]+'px)';
                    break;
                case 'scale':
                case 'scaleX':
                case 'scaleY':
                    str += key + '('+obj.transform[key] + ')';
                    break;

            }
            obj.style.transform = str;
        }
    }else{
        val=obj.transform[attr];
        if(typeof val ==='undefined'){
            if(attr==='scale' || attr === 'scaleX' || attr === 'scaleY'){
                val = 1;
            }else{
                val = 0;
            }
        }
        return val;
    }

}
