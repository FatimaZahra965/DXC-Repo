package com.dxc.ressource.controller;

import com.dxc.ressource.model.Externe;
import com.dxc.ressource.model.Interne;
import com.dxc.ressource.model.Ressource;
import com.dxc.ressource.service.ExterneService;
import com.dxc.ressource.service.InterneService;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/DXC")
//@CrossOrigin(origins = "*")
public class ResourceController {
    @Autowired
    private InterneService interneService;
    @Autowired
    private ExterneService externeService;
    //todo fix the paths to match the front end
    //interns requests

    @PostMapping("/addIntern")
    public Interne addIntern(@RequestBody Interne interne) {
        return interneService.addIntern(interne);
    }

    @PostMapping("/addInterns")
    public List<Interne> addInterns(@RequestBody List<Interne> internes) {
        return interneService.addInterns(internes);
    }

    @GetMapping("/Interns")
    public List<Interne> getInterns() {
        return interneService.getInterns();
    }

    @GetMapping("/Interns/activity/{id}")
    public List<Interne> getActivityInterns(@PathVariable Integer id) {
        return interneService.getActivityInterns(id);
    }

    @GetMapping("/Interns/capability/{id}")
    public List<Interne> getCapabilityInterns(@PathVariable Integer id) {
        return interneService.getCapabilityInterns(id);
    }

    @GetMapping("/Intern/{id}")
    public Ressource getInternById(@PathVariable Long id) {
        return interneService.getInternById(id);
    }

    @DeleteMapping("/deleteIntern/{id}")
    public boolean deleteIntern(@PathVariable Long id) {
        return interneService.dropIntern(id);

    }

    @PutMapping("/updateIntern")
    public Interne updateIntern(@RequestBody Interne interne) {
        return interneService.updateIntern(interne);
    }

    //externals requests

    //add a freelancer
    //after this request is executed another one will be executed to create the corresponding BC
    @PostMapping("/addFreelancer")
    public Externe addFreelancer(@RequestBody Externe externe) {
        return externeService.addFreelancer(externe);
    }

    //get all freelancers
    @GetMapping("/Freelancers")
    public List<Externe> getFreelancers() {
        return externeService.getFreelancers();
    }

    // get a freelancer by id
    @GetMapping("/Freelancer/{id}")
    public Externe getFreelancerById(@PathVariable Long id) {
        return externeService.getFreelancerById(id);
    }

    @DeleteMapping("/deleteFreelancer/{id}")
    public boolean deleteFreelancer(@PathVariable Long id) {
        return externeService.dropFreelancer(id);
    }

    @PutMapping("/updateFreelancer")
    public Externe updateFreelancer(@RequestBody Externe externe) {
        return externeService.updateFreelancer(externe);
    }


}
