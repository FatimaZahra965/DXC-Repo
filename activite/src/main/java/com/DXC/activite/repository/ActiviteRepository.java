package com.DXC.activite.repository;
import com.DXC.activite.models.Activite;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface ActiviteRepository extends JpaRepository<com.DXC.activite.models.Activite,Integer> {
    @Query("SELECT c FROM Activite c WHERE c.nomActivite = ?1")
    Optional<com.DXC.activite.models.Activite> findByNomActivite(String nomActivite);

<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
    @Query("SELECT c FROM Activite c WHERE c.fkPrestation = 0")
    List<Activite> findActivitiesEn();

    @Modifying // Whenever you are trying to modify a record in db, you have to mark it as @Modifying, which instruct Spring that it can modify existing records.
    @Query("UPDATE Activite act SET act.fkPrestation = ?1 WHERE act.id = ?2")
    void affectActivite(int fkPrestation, int idActivite);

    @Query("SELECT c FROM Activite c WHERE c.fkPrestation = ?1")
    List<Activite> getPrestationActivites(Integer prestation);

    @Query("SELECT c FROM Activite c WHERE c.fkPrestation = ?1")
    List<Activite> affectRessource(Integer idActivite,Integer idRessource);

<<<<<<< Updated upstream
=======
    @Query("SELECT c FROM Activite c, RessourceActivities rc WHERE c.id = rc.id_activite AND rc.id_ressource=?1")
    List<Activite> getActiviteOfRessurce(Integer idressources);

>>>>>>> Stashed changes

}
