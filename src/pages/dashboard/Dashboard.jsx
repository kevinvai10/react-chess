import React from 'react';
import {
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Paper
} from '@material-ui/core';
// UserInfo from '../../components/UserInfo/UserInfo'; import GamesInfo from
// '../../components/GamesInfo/GamesInfo';
import './Dashboard.scss';

const DEFAULT_IMAGE = 'https://www.vippng.com/png/full/416-4161690_empty-profile-picture-blank-avatar-i' +
        'mage-circle.png';

const createData = (name, turn, color) => ({name, turn, color});

const rows = [
    createData('Joe', 'Kevin', 'Black'),
    createData('Jon', 'Jon', 'White'),
    createData('Joel', 'Kevin', 'White')
];
const Dashboard = () => (
    <div className="Dashboard-Container">
        <section className="Left-Column">

            <Paper className="Dashboard-Usercard">
                <p>Name: Kevin</p>
                <p>Score: 500</p>
            </Paper>
            <h4>Your Active Games</h4>
            <TableContainer component={Paper} className="Dashboard-ActiveGames">
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>User</TableCell>
                            <TableCell align="left">Turn</TableCell>
                            <TableCell align="left">Color</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell align="left" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="left">{row.turn}</TableCell>
                                <TableCell align="left">{row.color}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </section>
        <section className="Center-Column">
            <TableContainer component={Paper} className="Dashboard-UserList">
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">User</TableCell>
                            <TableCell align="center">Turn</TableCell>
                            <TableCell align="center">Color</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell align="center" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="center">{row.turn}</TableCell>
                                <TableCell align="center">{row.color}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </section>
    </div>
);

export default Dashboard;
