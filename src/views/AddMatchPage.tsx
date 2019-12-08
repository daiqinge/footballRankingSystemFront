import {
  BasicButton,
  CustomInput,
  ItemGrid,
  RegularCard,
} from 'components';
import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import formStyle from 'assets/jss/material-dashboard-react/formStyle';
import { withStyles } from '@material-ui/core/styles';

interface EnState {
  winPlayer: string;
  losePlayer: string;
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

export class AddMatchPage extends React.Component<EnProps, EnState> {
  constructor(props: EnProps) {
    super(props);
    this.state = {
      winPlayer: '',
      losePlayer: ''
    };
  }

// handleEnNameChanged(value: string) { 
//   this.setState({winPlayer: value});
// }

validateForm() {
  if (this.state.winPlayer === '') {
    alert('win player should not be empty');
    return false;
  } else if (this.state.losePlayer === '') {
    alert('lose player should not be empty');
    return false;
  } 
  return true;
}

saveClick() {
    if (!this.validateForm()) {return; }

    let params = new URLSearchParams();
    params.append('winPlayer', this.state.winPlayer);
    params.append('losePlayer', this.state.losePlayer);
    
    let url = `http://localhost:8090/matchController/addMatch`;
 
    fetch(url, {
      mode: 'cors',
      cache: 'no-cache',
      method: `POST`,
      body: params,
    }).then(result => {
        if ( result.status >= 200 && result.status <= 300 ) {
            alert('saved successfully!');
        } else {
          alert('failed!');
        }
      }
    )
    .catch(error => {
      console.log('Error loading entities', error);
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
                  <Grid container >
                    <ItemGrid sm={3} >
                        <Typography >
                          Win Player Name
                        </Typography>
                    </ItemGrid>
                    <ItemGrid sm={9} >
                          <CustomInput
                            placeholder="Win Player..."
                            // handleChange={this.handleEnNameChanged}
                            value={this.state.winPlayer}
                            formControlProps={{
                              fullWidth: true,
                            }}
                          />
                    </ItemGrid>
                  </Grid>
                  <Grid container>
                    <ItemGrid sm={3} >
                    <Typography >
                    Lose Player Name
                        </Typography>
                    </ItemGrid>
                    <ItemGrid sm={9}>
                          <CustomInput
                            placeholder="Lose Player..."
                            // handleChange={this.state.losePlayer}
                            value={this.state.losePlayer}
                            formControlProps={{
                              fullWidth: true,
                            }}
                          />
                    </ItemGrid>
                  </Grid>

                  </div>
                }
            footer={<div >
              <BasicButton color="blue" size="large" onClick={() => this.saveClick()}>Save</BasicButton>
            </div>
            }
          />
          </ItemGrid>
          </Grid>
        </form >
      );
  }
}
