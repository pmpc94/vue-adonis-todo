'use strict'

const Project = use('App/Models/Project');
const AuthorizationService = use ('App/Services/AuthorizationService');

class ProjectController {
  async index({ auth }) {
    const user = await auth.getUser();
    console.log(user);
    return await user.projects().fetch();
  }

  async create({ auth, request }) {
    const user = await auth.getUser();
    const { title } = request.all();
    const project = new Project();
    project.title = title;
    project.fill({
      title
    });
    await user.projects().save(project);
    return project;
  }

  async destroy({ auth, request, params})  {
    const user = await auth.getUser();
    const id = params.id //same as const { id } = params;
    const project = await Project.find(id);
    AuthorizationService.verifyPermission(project, user);
    await project.delete();
    return project;
  }

  async update({ auth, request, params }) {
    const user = await auth.getUser();
    const { id } = params;
    const project = await Project.find(id);
    AuthorizationService.verifyPermission(project, user);
    project.merge(request.only('title')); //this will only retrieve the 'title' from the body
    await project.save();
    return project;
  }
}

module.exports = ProjectController
