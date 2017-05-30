class DomainRoute {

  constructor(baseRoute, path){
    this.baseRoute = baseRoute;
    this.path = path;
  }

  get list() {
    return this.baseRoute + path;
  }

  get new() {
    return this.baseRoute + path + '/new';
  }

  get edit() {
    return this.baseRoute + path + '/edit:_id';
  }

  get baseEdit() {
    return this.baseRoute + path + '/edit';
  }

}

export default DomainRoute;
