package com.example.Project.Management.App.Service;

import com.example.Project.Management.App.Entities.Project;
import com.example.Project.Management.App.Entities.Task;
import com.example.Project.Management.App.Entities.Team;
import com.example.Project.Management.App.Entities.User;
import com.example.Project.Management.App.Pojo.TaskPojo;
import com.example.Project.Management.App.Repository.ProjectRepository;
import com.example.Project.Management.App.Repository.TaskRepository;
import com.example.Project.Management.App.Repository.TeamRepository;
import com.example.Project.Management.App.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

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
    public Set<Task> getTasksById(int id)
    {
        User user=userRepository.findById(id).get();
        return user.getTasks();
    }
    public String deleteTask(int id)
    {
        taskRepository.deleteById(id);
        return  "success";
    }
    public Set<Project> getUserProjects(int userid)
    {
        User user=userRepository.findById(userid).get();
        Set project=new HashSet();
        for(Team team:user.getUserTeams())
        {
            for(Project projects:team.getProjects())
            {
                project.add(projects);
            }
        }
        return project;
    }
    public Set<Team> getUserTeams(int userid)
    {
        User user=userRepository.findById(userid).get();
        return user.getUserTeams();
    }
    public Task saveTask(TaskPojo taskPojo) throws Exception
    {
        System.out.println(taskPojo.toString());
        User user=userRepository.findById(taskPojo.getUserid()).get();
        Project project=projectRepository.findById(taskPojo.getProjectid()).get();
        Task task=new Task();
        task.setDescription(taskPojo.getDescription());
        task.setName(taskPojo.getName());
//        SimpleDateFormat formatter1=new SimpleDateFormat("dd-MM-yyyy");
//        task.setDuedate(formatter1.parse(taskPojo.getDate()));
        task.setProject(project);
        task.setUser(user);
        System.out.println(task.toString());
        taskRepository.save(task);
        return task;
    }
}
