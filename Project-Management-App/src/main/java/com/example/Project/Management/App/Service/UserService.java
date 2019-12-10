package com.example.Project.Management.App.Service;

import com.example.Project.Management.App.Entities.Project;
import com.example.Project.Management.App.Entities.Task;
import com.example.Project.Management.App.Entities.Team;
import com.example.Project.Management.App.Entities.User;
import com.example.Project.Management.App.Repository.ProjectRepository;
import com.example.Project.Management.App.Repository.TaskRepository;
import com.example.Project.Management.App.Repository.TeamRepository;
import com.example.Project.Management.App.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;
    @Autowired
    ProjectRepository projectRepository;
    @Autowired
    TaskRepository taskRepository;
    @Autowired
    TeamRepository teamRepository;
    public List<User> getUsers(){
        return userRepository.findAll();
    }
    public List<Project> getProjects(){
        return projectRepository.findAll();
    }
    public List<Team> getTeams(){
        return teamRepository.findAll();
    }
    public List<Task> getTasks(){
        return taskRepository.findAll();
    }
}
