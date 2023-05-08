import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
    Box,
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    Link,
    OutlinedInput,
    Stack,
    TextField,
    Typography
} from '@mui/material';

import styles from "./login.module.css"
import { VisibilityOutlined, VisibilityOffOutlined } from '@mui/icons-material';
import { fakeLoginService } from '../../services/MockServices';

export const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            keepMeSignedIn: false,
            submit: null
        },
        validationSchema: Yup.object({
            email: Yup
                .string()
                .email('Must be a valid email')
                .max(255)
                .required('Email is required'),
            password: Yup
                .string()
                .max(255)
                .required('Password is required')
        }),
        onSubmit: async (values, helpers) => {
            try {
                fakeLoginService({ email: values.email, password: values.password })
                console.log(values)
            } catch (err: any) {
                helpers.setStatus({ success: false });
                helpers.setErrors({ submit: err.message });
                helpers.setSubmitting(false);
            }
        }
    });

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
        <div style={{
            display: 'flex',
        }}>
            <div className={styles.loginBG} />
            <Box
                sx={{
                    backgroundColor: 'background.paper',
                    flex: '1 1 auto',
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <Box
                    sx={{
                        maxWidth: 550,
                        px: 3,
                        py: '100px',
                        width: '100%'
                    }}
                >
                    <div>
                        <Stack
                            spacing={1}
                            sx={{ mb: 3 }}
                        >
                            <Typography variant="h4">
                                Welcome to AQVA!
                            </Typography>
                            <Typography
                                color="text.secondary"
                                variant="body2"
                            >
                                Please sign-in to your account to use our platform.
                            </Typography>
                        </Stack>
                        <form
                            noValidate
                            onSubmit={formik.handleSubmit}
                        >
                            <Stack spacing={3}>
                                <TextField
                                    error={!!(formik.touched.email && formik.errors.email)}
                                    fullWidth
                                    helperText={formik.touched.email && formik.errors.email}
                                    label="Email Address"
                                    name="email"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="email"
                                    value={formik.values.email}
                                />
                                <FormControl sx={{ m: 1 }} variant="outlined">
                                    <InputLabel htmlFor="password">Password</InputLabel>
                                    <OutlinedInput
                                        id="password"
                                        name="password"
                                        type={showPassword ? 'text' : 'password'}
                                        error={!!(formik.touched.password && formik.errors.password)}
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        value={formik.values.password}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                >
                                                    {showPassword ? <VisibilityOffOutlined /> : <VisibilityOutlined />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        label="Password"
                                    />
                                    {formik.touched.password && formik.errors.password ? <Typography sx={{ ml: 2, fontSize: 12 }} variant="body2" color="red">
                                        {formik.errors.password}
                                    </Typography> : null}
                                </FormControl>
                            </Stack>
                            {/* {formik.errors.submit && (
                                <Typography
                                    color="error"
                                    sx={{ mt: 3 }}
                                    variant="body2"
                                >
                                    {formik.errors.submit}
                                </Typography>
                            )} */}
                            <Grid item xs={12} sx={{ mt: 1, mb: 1 }}>
                                <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={formik.values.keepMeSignedIn}
                                                onChange={formik.handleChange}
                                                name="keepMeSignedIn"
                                                color="primary"
                                                size="small"
                                            />
                                        }
                                        label={<Typography variant="body1">Keep me sign in</Typography>}
                                    />
                                    {/* <Link variant="h6" to="#" color="text.primary"> */}
                                    <Link href="#" underline="none" variant="body1">
                                        Forgot Password?
                                    </Link>
                                </Stack>
                            </Grid>
                            {/* {formik.errors.submit && (
                                <Grid item xs={12}>
                                    <FormHelperText error>{formik.errors.submit}</FormHelperText>
                                </Grid>
                            )} */}
                            <Button
                                fullWidth
                                size="large"
                                sx={{ mb: 3 }}
                                type="submit"
                                variant="contained"
                            >
                                Continue
                            </Button>
                            <Typography
                                color="text.secondary"
                                variant="body1"
                                sx={{ textAlign: "center" }}
                            >
                                New on our platform?
                                &nbsp;
                                <Link
                                    underline="none"
                                    variant="body1"
                                    href="/auth/register"
                                >
                                    Create an account
                                </Link>
                            </Typography>
                        </form>
                    </div>
                </Box>
            </Box>
        </div >
    );
};
