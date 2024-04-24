package enumeraciones;

public enum Continentes {
    AFRICA(54, "1.2 billones"),
    EUROPA(50, "1.1 billones"),
    ASIA(48, "1.9 millones"),
    AMERICA(35, "150.2 millones"),
    OCEANIA(14, "1.2 billones");
    
    private final int paises;
    private String habitantes;
    
    Continentes(int paises, String habitantes){
        this.paises = paises;
        this.habitantes = habitantes;
    }
    //Método Get
    public int getPaises(){
        return this.paises;
    }
    public String getHabitantes(){
        return this.habitantes;
    }    
}
