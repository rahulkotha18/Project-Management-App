package com.example.Project.Management.App.Repository;

import com.example.Project.Management.App.Entities.Project;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path = "projects")
public interface ProjectRepository extends JpaRepository<Project, Integer> {
}
