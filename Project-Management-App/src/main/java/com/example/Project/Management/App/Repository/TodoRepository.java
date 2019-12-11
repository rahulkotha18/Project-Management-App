package com.example.Project.Management.App.Repository;

import com.example.Project.Management.App.Entities.Task;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.Repository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface TodoRepository extends Repository<Task, Integer> {

    @Query(value = "SELECT * FROM task t WHERE " +
            "LOWER(t.name) LIKE LOWER(CONCAT('%',:searchTerm, '%')) OR " +
            "LOWER(t.description) LIKE LOWER(CONCAT('%',:searchTerm, '%'))",
            nativeQuery = true
    )
    List<Task> findBySearchTermNative(@Param("searchTerm") String searchTerm);
}