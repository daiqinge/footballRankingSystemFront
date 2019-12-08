import {
  BasicButton,
  CustomInput,
  ItemGrid,
  RegularCard,
} from 'components';
import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import { History } from 'history';
import formStyle from 'assets/jss/material-dashboard-react/formStyle';
import { withStyles } from '@material-ui/core/styles';

interface EnState {
  player1: string;
  player2: string;
  match1: number;
  match2: number;
  win1: number;
  win2: number;
}

interface EnProps {
  classes: {
    grid: string;
    label: string;
    backBtn: string;
    hide: string;
    hidden: string;
  };
}

export class ShowPlayersPage extends React.Component<EnProps, EnState> {
  constructor(props: EnProps) {
    super(props);
    this.state = {
      player1: '',
      player2: '',
      match1: 0,
      match2: 0,
      win1: 0,
      win2: 0
    };
  }

validateForm() {
  if (this.state.player1 === '') {
    alert('player should not be empty');
    return false;
  } else if (this.state.player2 === '') {
    alert('player should not be empty');
    return false;
  } 
  return true;
}

saveClick() {
    if (!this.validateForm()) {return; }

    let params = new URLSearchParams();
    params.append('player1', this.state.player1);
    params.append('player2', this.state.player2);
    
    let url = `http://localhost:8090/matchController/getTwoPlayerRes`;
 
    fetch(url, {
      mode: 'cors',
      cache: 'no-cache',
      method: `POST`,
      body: params,
    }).then(result => {
        if ( result.status >= 200 && result.status <= 300 ) {
            this.setState({
                 match1: result[0].totalMatch,
                 match2: result[1].totalMatch,
                 win1: result[0].wonMatch,
                 win2: result[1].wonMatch,
            });
        } else {
          alert('failed!');
        }
      }
    )
    .catch(error => {
      console.log('Error loading', error);
    });
  }

  render() {
  return (
    <form noValidate={true} >  
      <Grid container>
        <ItemGrid sm={8}>
          <RegularCard
            cardTitle={`Add Match`}
            content={
              <div>
                  <Grid container>
                    <ItemGrid sm={6} >
                        <Typography >
                          Player1
                        </Typography>
                    </ItemGrid>
                    <ItemGrid sm={6} >
                    <Typography >
                    Player2
                        </Typography>
                    </ItemGrid>
                 
                  </Grid>
                  <Grid container>
                    
                    <ItemGrid sm={6} >
                          <CustomInput
                            placeholder="Player..."
                            // handleChange={this.handleEnNameChanged}
                            value={this.state.player1}
                            formControlProps={{
                              fullWidth: true,
                            }}
                          />
                    </ItemGrid>
                    <ItemGrid sm={6}>
                          <CustomInput
                            placeholder="Player..."
                            // handleChange={this.state.losePlayer}
                            value={this.state.player2}
                            formControlProps={{
                              fullWidth: true,
                            }}
                          />
                    </ItemGrid>
                  </Grid>
                  <Grid container>
                    <ItemGrid sm={6} >
                        <Typography >
                          Match Participate: {this.state.match1}
                        </Typography>
                    </ItemGrid>
                    <ItemGrid sm={6} >
                    <Typography >
                    Match Participate: {this.state.match2}
                        </Typography>
                    </ItemGrid>
                 
                  </Grid>
                  <Grid container>
                    <ItemGrid sm={6} >
                        <Typography >
                          Match Win: {this.state.win1}
                        </Typography>
                    </ItemGrid>
                    <ItemGrid sm={6} >
                    <Typography >
                    Match Win: {this.state.win2}
                        </Typography>
                    </ItemGrid>
                 
                  </Grid>
                  </div>
                }
            footer={<div >
              <BasicButton color="blue" size="large" onClick={() => this.saveClick()}>Search</BasicButton>
            </div>
            }
          />
          </ItemGrid>
          </Grid>
        </form >
      );
  }
}
