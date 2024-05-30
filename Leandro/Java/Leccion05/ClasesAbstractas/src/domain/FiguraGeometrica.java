package domain;

public abstract class FiguraGeometrica {

    protected String tipoFigura;
    
    protected FiguraGeometrica(String tipoFigura){
        this.tipoFigura = this.tipoFigura;
    }
    //Metodo abstracto
    public abstract void dibujar();
    
    //Agregaamos el get y el set

    public String getTipoFigura() {
        return tipoFigura;
    }

    public void setTipoFigura(String tipoFigura) {
        this.tipoFigura = tipoFigura;
    }
    
    @Override
    public String toString() {
        return "FiguraGeometrica{" + "tipoFigura=" + tipoFigura + '}';
    }    
}
