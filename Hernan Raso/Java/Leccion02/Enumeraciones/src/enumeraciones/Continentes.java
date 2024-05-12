package enumeraciones;

public enum Continentes {
    AFRICA(53, "1.2 Billones"),
    EUROPA(46, "1.1 Billones"),
    ASIA(44, "1.5 Millones"),
    AMERICA(34, "1.9 Billones"),
    OCEANIA(14, "150.3 Millones");
    
    private final int paises;
    private String habitantes;
    
    Continentes(int paises, String habitantes){
        this.paises = paises;
        this.habitantes = habitantes;
    }
    
    //Metodo Get
    public int getPaises(){
        return this.paises;
   
    }
    
    public String getHabitantes(){
        return this.habitantes;
    
    }
}
