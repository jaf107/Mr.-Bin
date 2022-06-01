import OTPVerify from "./OTPVerify";


function MyProfile(props) {
    const user = props.user_data
  return (
    <div>
      <div class="panel">
        <div class="bio-graph-heading">General User Profile</div>
        <div class="panel-body bio-graph-info m-5">
          <div class="row">
            <div class="bio-row">
              <p>
                <span> Name </span>: {user.name}
              </p>
            </div>
            <div class="bio-row">
              <p>
                <span>Email </span>: {user.email}
              </p>
            </div>

            <div class="bio-row">
              <p>
                <span>Mobile </span>: (+88) {user.phone}
              </p>
              <OTPVerify number={"+88" + user.phone}></OTPVerify>
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
                  <div className="biochartDiv">
                    <canvas width="100" height="100px"></canvas>
                    <input
                      class="knob"
                      data-width="100"
                      data-height="100"
                      data-displayprevious="true"
                      data-thickness=".2"
                      value="35"
                      data-fgcolor="#e06b7d"
                      data-bgcolor="#e8e8e8"
                      className="biochartInput"
                    />
                  </div>
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
                  <div className="biochartDiv">
                    <canvas width="100" height="100px"></canvas>
                    <input
                      class="knob"
                      data-width="100"
                      data-height="100"
                      data-displayprevious="true"
                      data-thickness=".2"
                      value="63"
                      data-fgcolor="#4CC5CD"
                      data-bgcolor="#e8e8e8"
                      className="biochartInput"
                    />
                  </div>
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
                  <div className="biochartDiv">
                    <canvas width="100" height="100px"></canvas>
                    <input
                      class="knob"
                      data-width="100"
                      data-height="100"
                      data-displayprevious="true"
                      data-thickness=".2"
                      value="75"
                      data-fgcolor="#96be4b"
                      data-bgcolor="#e8e8e8"
                      className="biochartInput"
                    />
                  </div>
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
                  <div className="biochartDiv">
                    <canvas width="100" height="100px"></canvas>
                    <input
                      class="knob"
                      data-width="100"
                      data-height="100"
                      data-displayprevious="true"
                      data-thickness=".2"
                      value="50"
                      data-fgcolor="#cba4db"
                      data-bgcolor="#e8e8e8"
                      className="biochartInput"
                    />
                  </div>
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
  );
}

export default MyProfile