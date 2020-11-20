class Block{
    constructor(x, y, width, height) {
        var options = {
           
            restitution :0.4,
            friction :0.0,
            //isStatic:true
           
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.photo=loadImage("BOX.png")
        this.width = width;
        this.height = height;
        this.visibilty=255
        this.path=[]
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        if(this.body.speed>2 && frameCount>20)
        {

      
        push();
        World.remove(world,this.body)
       this.visibilty=this.visibilty-5
       // var position=[this.body.position.x,this.body.position.y]
       // this.path.push(position)
      //  for(var i=3; i<this.path.length; i=i+1)
        translate(pos.x, pos.y);
        tint( 255,this.visibilty);
        imageMode (CENTER)
        image(this.photo,0,0,this.width,this.height)
        //rotate(angle);
        //rectMode(CENTER);
        //rect(0,0,this.width, this.height);
        pop();
        
      }
      else
      {
        push ()
        translate(pos.x, pos.y);
        imageMode (CENTER)
        image(this.photo,0,0,this.width,this.height)
        pop ()
      }
    }
      score(){
        if (this.visibilty < 0 && this.visibilty > -105){
          score++;
        }
      }
    }
