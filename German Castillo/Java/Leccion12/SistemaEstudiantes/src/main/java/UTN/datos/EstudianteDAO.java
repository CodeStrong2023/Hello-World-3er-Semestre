package UTN.datos;

import UTN.dominio.Estudiante;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import static UTN.conexion.Conexion.getConnection;
import java.util.List;

public class EstudianteDAO {
    // metodo listar
    public List<Estudiante> listarEstudiantes(){
        List<Estudiante> estudiantes = new ArrayList<>();
        // creamos algunos objetos q son necesarios para comunicarnos con la base de datos
        PreparedStatement ps; // envia la sentencia a la base de datos
        ResultSet rs; // obtenemos el resultado de la base de datos
        // creamos un objeto de tipo conexion
        Connection con = getConnection();
        String sql = "SELECT * FROM estudiantes2024";
        try{
            ps = con.prepareStatement(sql);
            rs = ps.executeQuery();
            while(rs.next()){
                var estudiante = new Estudiante();
                estudiante.setIdEstudiante(rs.getInt("idestudiantes2024"));
                estudiante.setNombre(rs.getString("Nombre"));
                estudiante.setApellido(rs.getString("Apellido"));
                estudiante.setTelefono(rs.getString("Telefono"));
                estudiante.setEmail(rs.getString("Email"));
                // falta agregarlo a la lista
                estudiantes.add(estudiante);
            }
        } catch (Exception e){
            System.out.println("Ocurrió un error al seleccionar datos: "+e.getMessage());
        }
        finally {
            try {
                con.close();
            } catch (Exception e){
                System.out.println("Ocurrió un error al cerrar la conexion: "+e.getMessage());
            }
        } // fin finally
        return estudiantes;
    } // fin metodo listar

    // metodo por id -> fin by id
    public boolean buscarEstudiantePorId(Estudiante estudiante){
        PreparedStatement ps;
        ResultSet rs;
        Connection con = getConnection();
        String sql = "SELECT * FROM estudiantes2024 WHERE idestudiantes2024=?";
        try{
            ps = con.prepareStatement(sql);
            ps.setInt(1, estudiante.getIdEstudiante());
            rs = ps.executeQuery();
            if(rs.next()){
                estudiante.setNombre(rs.getString("Nombre"));
                estudiante.setApellido(rs.getString("Apellido"));
                estudiante.setTelefono(rs.getString("Telefono"));
                estudiante.setEmail(rs.getString("Email"));
                return true; // se encontro un registro
            } // fin if
        } catch (Exception e){
            System.out.println("Ocurrió un error al buscar estudiante: "+e.getMessage());
        } finally{
            try{
                con.close();
            } catch (Exception e){
                System.out.println("Ocurrió un error al cerrar la conexion: "+e.getMessage());
            } // fin catch
        } // fin finally
        return false;
    }

    // metodo agregar un nuevo estudiante
    public boolean agregarEstudiante(Estudiante estudiante){
        PreparedStatement ps;
        Connection con = getConnection();
        String sql = "INSERT INTO estudiantes2024 (nombre, apellido, telefono, email) VALUES (?, ?, ? ,?)";
        try{
            ps = con.prepareStatement(sql);
            ps.setString(1, estudiante.getNombre());
            ps.setString(1, estudiante.getApellido());
            ps.setString(1, estudiante.getTelefono());
            ps.setString(1, estudiante.getEmail());
            ps.execute();
            return true;

        } catch (Exception e){
            System.out.println("Ocurrió un error al agregar estudiante: "+e.getMessage());
        } // fin catch
        finally{
            try{
                con.close();
            } catch ( Exception e){
                System.out.println("Error al cerrar la conexion: "+e.getMessage());
            } // fin catch
        } // fin finally
        return false;
    } // fin metodo agregar estudiante

    // metodo para modificar estudiante
    public boolean modificarEstudiante(Estudiante estudiante){
        PreparedStatement ps;
        Connection con = getConnection();
        String sql = "UPDATE estudiantes2024 SET nombre=?, apellido=?, telefono=?, email=? WHERE idestudiantes2024=?";
        try{
            ps = con.prepareStatement(sql);
            ps.setString(1, estudiante.getNombre());
            ps.setString(2, estudiante.getApellido());
            ps.setString(3, estudiante.getTelefono());
            ps.setString(4, estudiante.getEmail());
            ps.setInt(5, estudiante.getIdEstudiante());
            ps.execute();
            return true;
        } catch (Exception e){
            System.out.println("Error al modificar estudiante: "+e.getMessage());
        } // fin catch
        finally{
            try{
                con.close();
            } catch (Exception e){
                System.out.println("Error al cerrar la conexion: "+e.getMessage());
            } // fin catch
        } // fin finally
        return false;
    } // fin metodo modificarEstudiante

    public static void main(String[] args) {
        var estudianteDao = new EstudianteDAO();
        // modificar estudiante
        var estudianteModificado = new Estudiante(1, "Juan Carlos", "Juarez", "5548641646", "juarez@gmail.com");
        var modificado = estudianteDao.modificarEstudiante(estudianteModificado);
        if(modificado)
            System.out.println("Estudiante modificado: "+estudianteModificado);
        else
            System.out.println("No se modifico el estudiante: "+estudianteModificado);

        // agregar estudiante
        //var nuevoEstudiante = new Estudiante("Carlos", "Lara", "55455666552", "clara@gmail.com");
        //var agregado = estudianteDao.agregarEstudiante(nuevoEstudiante);
        //if(agregado)
        //    System.out.println("Estudiante agregado: "+nuevoEstudiante);
        //else
        //    System.out.println("No se ha agregado nuevo estudiante: "+nuevoEstudiante);


        // listar los estudiantes
        System.out.println("Listado de estudiantes: ");
        List<Estudiante> estudiantes = estudianteDao.listarEstudiantes();
        estudiantes.forEach(System.out::println); // funcion lambda para imprimir



        // buscar por id
        //var estudiante1 = new Estudiante(1);
        //System.out.println("Estudiantes antes de la búsqueda: "+estudiante1);
        //var encontrado = estudianteDao.buscarEstudiantePorId(estudiante1);
        //if(encontrado)
            //System.out.println("Estudiante encontrado: "+estudiante1);
        //else
            //System.out.println("No se encontro el estudiante: "+estudiante1.getIdEstudiante());
    }
} // fin clase
