package com.example.Project.Management.App.Repository;

import com.example.Project.Management.App.Entities.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path = "tasks")
public interface TaskRepository extends JpaRepository<Task, Integer> {
}
