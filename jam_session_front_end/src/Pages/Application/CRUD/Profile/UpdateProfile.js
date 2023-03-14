import ResponsiveDrawer from "../../../../Components/Application/Sidebar/Sidebar.js";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function UpdateUserProfile({ route }) {
    let profile = route.params;

    const [displayName, setDisplayName] = useState(profile.display_name);
    const [photo, setPhoto] = useState(profile.user_photo_link);
    const [location, setLocation] = useState(profile.location);
    const [instruments, setInstruments] = useState(profile.instruments);
    const [experience, setExperience] = useState(profile.experience);
    const [liked, setLiked] = useState(profile.liked_genres);
    const [disliked, setDisliked] = useState(profile.disliked_genres);
    const [portfolio, setPortfolio] = useState(profile.portfolio_link);
    const [fee, setFee] = useState(profile.hourly_fee);
    const [availability, setAvailability] = useState(profile.availability);
    const navigate = useNavigate();

    const submitButton = async (e) => {
        e.preventDefault();

        // On submit of the form, send a POST request with the data to the server.
        let data = {
            display_name: displayName,
            user_photo_link: photo,
            location: location,
            instruments: instruments,
            experience: experience,
            liked_genres: liked,
            disliked_genres: disliked,
            portfolio_link: portfolio,
            hourly_fee: fee,
            availability: availability,
        };

        const response = await fetch(
            `${process.env.REACT_APP_API_SERVER_URL}/user_profiles/${profile.user_id}`,
            {
                method: "PUT",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        if (response.status === 200 || response.status === 201) {
            alert("Successfully updated User Profile!");
            navigate("/profile");
        } else {
            alert(
                `Failed to update User Profile, status code = ${response.status}`
            );
        }
    };

    return (
        <header className="App-header3">
            <div>
                <ResponsiveDrawer></ResponsiveDrawer>
            </div>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                }}
            >
                <Grid
                    container
                    spacing={2}
                    sx={{
                        flexGrow: 2,
                        p: 3,
                        spacing: 2,
                        alignItems: "center",
                        alignContent: "center",
                    }}
                >
                    <h1> Update User Profile</h1>
                </Grid>
            </Box>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                }}
            >
                <Grid
                    container
                    spacing={2}
                    sx={{
                        flexGrow: 2,
                        p: 3,
                        spacing: 2,
                        alignItems: "center",
                        alignContent: "center",
                    }}
                >
                    <Form>
                        <Form.Group className="mb-3" controlId="profileName">
                            <Form.Label>Display Name</Form.Label>
                            <Form.Control
                                type="name"
                                onChange={(e) => setDisplayName(e.target.value)}
                                placeholder={profile.display_name}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formPhotoLink">
                            <Form.Label>Photo Link</Form.Label>
                            <Form.Control
                                type="photo"
                                onChange={(e) => setPhoto(e.target.value)}
                                placeholder={profile.user_photo_link}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formLocation">
                            <Form.Label>Location</Form.Label>
                            <Form.Control
                                type="location"
                                onChange={(e) => setLocation(e.target.value)}
                                placeholder={profile.location}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formInstruments">
                            <Form.Label>Instruments</Form.Label>
                            <Form.Control
                                type="instruments"
                                onChange={(e) => setInstruments(e.target.value)}
                                placeholder={profile.instruments}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formExperience">
                            <Form.Label>Experience Level</Form.Label>
                            <Form.Control
                                type="experience"
                                onChange={(e) => setExperience(e.target.value)}
                                placeholder={profile.experience}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formLikedGenres">
                            <Form.Label>Liked Genres</Form.Label>
                            <Form.Control
                                type="liked genres"
                                onChange={(e) => setLiked(e.target.value)}
                                placeholder={profile.liked_genres}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formDislikedGenres">
                            <Form.Label>Disliked Genres</Form.Label>
                            <Form.Control
                                type="disliked genres"
                                onChange={(e) => setDisliked(e.target.value)}
                                placeholder={profile.disliked_genres}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formPortfolio">
                            <Form.Label>Portfolio Link</Form.Label>
                            <Form.Control
                                type="portfolio"
                                onChange={(e) => setPortfolio(e.target.value)}
                                placeholder={profile.portfolio_link}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formFee">
                            <Form.Label>Hourly Fee</Form.Label>
                            <Form.Control
                                type="fee"
                                onChange={(e) => setFee(e.target.value)}
                                placeholder={profile.hourly_fee}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formAvailability">
                            <Form.Label>Availability</Form.Label>
                            <Form.Control
                                type="availability"
                                onChange={(e) => setAvailability(e.target.value)}
                                placeholder={profile.availability}
                            />
                        </Form.Group>
                        <Button variant="primary" onClick={submitButton}>
                            Submit
                        </Button>
                    </Form>
                </Grid>
            </Box>
        </header>
    );
}

export default UpdateUserProfile;
