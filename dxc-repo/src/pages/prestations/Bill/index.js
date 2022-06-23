import PropTypes from "prop-types";

// @mui material components
import VisibilityIcon from "@material-ui/icons/Visibility";
import EditIcon from "@material-ui/icons/Edit";

// import SuiButton from "../SuiButton";
import { Box, Button, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { showRessources } from "../../../services/Actions/prestationsActions";
import useStyles from "./style.js";

// Soft UI Dashboard React components

function Bill({
  nomActivite,
  typeActivite,
  status,
  description,
  categorie,
  dateDebut,
  dateFin,
  id,
  noGutter,
}) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const showRessource = (value) => dispatch(showRessources(value));
  const RessourcesToShow = useSelector(
    (state) => state.prestations.showRessources,
  );

  const showRessourcess = (e) => {
    let data = {
      showRessource: RessourcesToShow.showRessource ? false : true,
      idRessource: e,
    };
    console.log("data *", data);
    showRessource(data);
  };
  return (
    <>
      <hr
        style={{ backgroundColor: "#603494", width: "100%", textAlign: "flex" }}
      ></hr>
      <Box
        component="li"
        display="flex"
        justifyContent="space-between"
        alignItems="flex-start"
        bgColor="grey-100"
        borderRadius="lg"
        p={3}
        mb={noGutter ? 0 : 1}
        mt={2}
      >
        <Box width="100%" display="flex" flexDirection="column">
          <Box display="flex" justifyContent="space-between" mb={1}>
            <Typography
              variant="button"
              fontWeight="medium"
              textTransform="capitalize"
            >
              {nomActivite}
            </Typography>

            <Box
              display="flex"
              alignItems="center"
              mt={{ xs: 2, sm: 0 }}
              ml={{ xs: -1.5, sm: 0 }}
            >
              <Box mr={1}>
                <Button variant="text" color="error">
                  <EditIcon className={classes.icons} />
                </Button>
              </Box>
              <Button
                variant="text"
                color="dark"
                onClick={() => {
                  showRessourcess(id);
                }}
              >
                <VisibilityIcon className={classes.icons} />
              </Button>
            </Box>
          </Box>
          <Typography variant="caption" color="text">
            Type:&nbsp;&nbsp;&nbsp;
            <Typography variant="caption" fontWeight="medium">
              {typeActivite}
            </Typography>
          </Typography>

          <Typography variant="caption" color="text">
            Status:&nbsp;&nbsp;&nbsp;
            <Typography variant="caption" fontWeight="medium">
              {status}
            </Typography>
          </Typography>

          <Typography variant="caption" color="text">
            Categorie:&nbsp;&nbsp;&nbsp;
            <Typography variant="caption" fontWeight="medium">
              {categorie}
            </Typography>
          </Typography>
          <Typography variant="caption" color="text">
            Date de début:&nbsp;&nbsp;&nbsp;
            <Typography variant="caption" fontWeight="medium">
              {dateDebut}
            </Typography>
          </Typography>
          <Typography variant="caption" color="text">
            Date de fin:&nbsp;&nbsp;&nbsp;
            <Typography variant="caption" fontWeight="medium">
              {dateFin}
            </Typography>
          </Typography>
        </Box>
      </Box>
    </>
  );
}

// Setting default values for the props of Bill
Bill.defaultProps = {
  noGutter: false,
};

// Typechecking props for the Bill
Bill.propTypes = {
  name: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  vat: PropTypes.string.isRequired,
  noGutter: PropTypes.bool,
};

export default Bill;
