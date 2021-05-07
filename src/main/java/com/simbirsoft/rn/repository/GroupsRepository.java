package com.simbirsoft.rn.repository;

import com.simbirsoft.rn.domain.Groups;
import java.util.List;
import java.util.Optional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

/**
 * Spring Data SQL repository for the Groups entity.
 */
@Repository
public interface GroupsRepository extends JpaRepository<Groups, Long> {
    @Query(
        value = "select distinct groups from Groups groups left join fetch groups.employees",
        countQuery = "select count(distinct groups) from Groups groups"
    )
    Page<Groups> findAllWithEagerRelationships(Pageable pageable);

    @Query("select distinct groups from Groups groups left join fetch groups.employees")
    List<Groups> findAllWithEagerRelationships();

    @Query("select groups from Groups groups left join fetch groups.employees where groups.id =:id")
    Optional<Groups> findOneWithEagerRelationships(@Param("id") Long id);
}
