import './UserAccount.css'

function UserAccount(user){
    return(
        <div class="container bootstrap snippets bootdey">
<div class="row">
  <div class="profile-nav col-md-3">
      <div class="panel">
          <div class="user-heading round">
              <a href="#">
                  <img src={require("../../assets/avatar3.png")} alt=""/>
              </a>
              <h1>Test User</h1>
              <p>test@gmail.com</p>
          </div>

          <ul class="nav nav-pills nav-stacked flex-column">
              <li class="active" className='p-3'><a href="#" className='text-decoration-none'> <i class="fa fa-user"></i> Profile</a></li>
              <li className='p-3'><a href="#" className='text-decoration-none'> <i class="fa fa-calendar"></i> Recent Activity <span class="label label-warning pull-right r-activity">9</span></a></li>
              <li className='p-3'><a href="#"  className='text-decoration-none'> <i class="fa fa-edit"></i> Edit profile</a></li>
          </ul>
      </div>
  </div>
  <div class="profile-info col-md-9">
      <div class="panel">
          <div class="bio-graph-heading">
             General User Profile
          </div>
          <div class="panel-body bio-graph-info m-5">
              <div class="row">
                  <div class="bio-row">
                      <p><span>First Name </span>: Camila</p>
                  </div>
                  <div class="bio-row">
                      <p><span>Last Name </span>: Smith</p>
                  </div>
                  <div class="bio-row">
                      <p><span>Country </span>: Australia</p>
                  </div>
                  <div class="bio-row">
                      <p><span>Birthday</span>: 13 July 1983</p>
                  </div>
                  <div class="bio-row">
                      <p><span>Occupation </span>: UI Designer</p>
                  </div>
                  <div class="bio-row">
                      <p><span>Email </span>: jsmith@flatlab.com</p>
                  </div>
                  <div class="bio-row">
                      <p><span>Mobile </span>: (+880) 13 4567890</p>
                  </div>
              </div>
          </div>
      </div>
      <div>
          <div class="row">
              <div class="col-md-6">
                  <div class="panel card">
                      <div class="panel-body">
                          <div class="bio-chart">
                              <div className='biochartDiv'><canvas width="100" height="100px"></canvas><input class="knob" data-width="100" data-height="100" data-displayprevious="true" data-thickness=".2" value="35" data-fgcolor="#e06b7d" data-bgcolor="#e8e8e8" className='biochartInput'/></div>
                          </div>
                          <div class="bio-desk">
                              <h4 class="red">Sold Items</h4>
                              <p>Started : 15 July</p>
                              
                          </div>
                      </div>
                  </div>
              </div>
              <div class="col-md-6">
                  <div class="panel card">
                      <div class="panel-body">
                          <div class="bio-chart">
                              <div className='biochartDiv' ><canvas width="100" height="100px"></canvas><input class="knob" data-width="100" data-height="100" data-displayprevious="true" data-thickness=".2" value="63" data-fgcolor="#4CC5CD" data-bgcolor="#e8e8e8" className='biochartInput'/></div>
                          </div>
                          <div class="bio-desk">
                              <h4 class="terques">Recycles</h4>
                              <p>Started : 15 July</p>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="col-md-6">
                  <div class="panel card">
                      <div class="panel-body">
                          <div class="bio-chart">
                              <div className='biochartDiv'><canvas width="100" height="100px"></canvas><input class="knob" data-width="100" data-height="100" data-displayprevious="true" data-thickness=".2" value="75" data-fgcolor="#96be4b" data-bgcolor="#e8e8e8" className='biochartInput'/></div>
                          </div>
                          <div class="bio-desk">
                              <h4 class="green">Donations</h4>
                              <p>Started : 15 July</p>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="col-md-6">
                  <div class="panel card">
                      <div class="panel-body">
                          <div class="bio-chart">
                              <div className='biochartDiv'><canvas width="100" height="100px"></canvas><input class="knob" data-width="100" data-height="100" data-displayprevious="true" data-thickness=".2" value="50" data-fgcolor="#cba4db" data-bgcolor="#e8e8e8" className='biochartInput'/></div>
                          </div>
                          <div class="bio-desk">
                              <h4 class="purple">Bought Items</h4>
                              <p>Started : 15 July</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</div>
</div>
    )
}

export default UserAccount;