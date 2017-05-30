class DomainRoute {

  constructor(baseRoute, path){
    this.baseRoute = baseRoute;
    this.path = path;
  }

  get list() {
    return this.baseRoute + this.path;
  }

  get new() {
    return this.baseRoute + this.path + '/new';
  }

  get edit() {
    return this.baseRoute + this.path + '/edit/:_id';
  }

  get baseEdit() {
    return this.baseRoute + this.path + '/edit/';
  }

}

export default DomainRoute;
