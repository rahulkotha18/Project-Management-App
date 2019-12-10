package com.example.Project.Management.App.Pojo;

import java.util.Date;

public class TaskPojo {
    private int id;
    private String name;
    private String description;
    private String date;
    private int userid;
    private int projectid;
    public TaskPojo(){}

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public int getUserid() {
        return userid;
    }

    public void setUserid(int userid) {
        this.userid = userid;
    }

    public int getProjectid() {
        return projectid;
    }

    public void setProjectid(int projectid) {
        this.projectid = projectid;
    }

    @Override
    public String toString() {
        return "TaskPojo{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", date=" + date +
                ", userid=" + userid +
                ", projectid=" + projectid +
                '}';
    }

    public TaskPojo(int id, String name, String description, String date, int userid, int projectid) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.date = date;
        this.userid = userid;
        this.projectid = projectid;
    }
}
