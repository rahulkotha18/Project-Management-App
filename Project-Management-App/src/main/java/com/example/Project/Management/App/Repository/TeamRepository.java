package com.example.Project.Management.App.Repository;

import com.example.Project.Management.App.Entities.Team;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path = "teams")
public interface TeamRepository extends JpaRepository<Team, Integer> {
}
