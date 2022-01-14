import React, { useEffect, useState } from 'react';

import './app.scss';

import { Header } from '@srwx/store/ui-shared';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import { formatRating } from '@srwx/store/util-formatters';

import { Route, useHistory } from 'react-router-dom';

import { StoreFeatureGameDetail } from '@srwx/store/feature-game-detail';
import { Game } from '@srwx/api/util-interfaces'

export const App = () => {
  const history = useHistory();
  const [state, setState] = useState<{
    data: Game[];
    loadingState: 'success' | 'error' | 'loading';
  }>({
    data: [],
    loadingState: 'success',
  });

  useEffect(() => {
    setState({
      ...state,
      loadingState: 'loading',
    });
    fetch('/api/games')
      .then((x) => x.json())
      .then((res) => {
        setState({
          ...state,
          data: res,
          loadingState: 'success',
        });
      })
      .catch((err) => {
        setState({
          ...state,
          loadingState: 'error',
        });
      });
  }, []);

  return (
    <>
      <Header title="Scalable Typescript React Nest Storybook Cypress Jest ESLint computation Cache Build within NX"/>
      <div className="container" data-testid="app-container">
        <div className="games-layout">
          {state.loadingState === 'loading'
            ? 'Loading...'
            : state.loadingState === 'error'
              ? '<div>Error retrieving data</div>'
              : state.data.map((x) => (
                <Card
                  key={x.id}
                  className="game-card"
                  onClick={() => history.push(`/game/${x.id}`)}
                >
                  <CardActionArea>
                    <CardMedia
                      className="game-card-media"
                      image={x.image}
                      title={x.name}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {x.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {x.description}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                        className="game-rating"
                      >
                        <strong>Rating:</strong> {formatRating(x.rating)}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              ))}
        </div>
      </div>
      {/* @ts-ignore */}
      <Route path="/game/:id" component={StoreFeatureGameDetail} />
    </>
  );
};

export default App;
