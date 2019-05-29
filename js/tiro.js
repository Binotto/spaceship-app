function Tiro(context, nave) {
   this.context = context;
   this.nave = nave;
   
   // Posicionar o tiro no bico da nave
   this.largura = 4;
   this.altura = 20;   
   this.x = nave.x + nave.imagem.width / 2 - this.largura / 2;
   this.y = nave.y - this.altura;
   this.velocidade = 1;
   this.numRan = Math.floor(Math.random() * 5);

   if(this.numRan == 0){
      this.cor = 'red';
   }else if(this.numRan == 1){
      this.cor = 'yellow';
   }else if (this.numRan == 2){
      this.cor = 'green';
   }else if(this.numRan == 3){
      this.cor = 'blue';
   }else if(this.numRan == 4){
      this.cor = 'white';
   }

   
}
Tiro.prototype = {
   atualizar: function() {
      this.y -= this.velocidade;
   },
   desenhar: function() {
      var ctx = this.context;
      ctx.save();
      ctx.fillStyle = this.cor;
      ctx.fillRect(this.x, this.y, this.largura, this.altura);
      ctx.restore();
   }
}
