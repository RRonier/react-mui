import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
    Box,
    Button,
    FormHelperText,
    Stack,
    Tab,
    Tabs,
    TextField,
    Typography
} from '@mui/material';

import styles from "./login.module.css"

export const LoginPage = () => {
    // const router = useRouter();
    // const auth = useAuth();
    const [method, setMethod] = useState('email');
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
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
                // await auth.(values.email, values.password);
                // router.push('/');
                console.log(formik.values)
            } catch (err: any) {
                helpers.setStatus({ success: false });
                helpers.setErrors({ submit: err.message });
                helpers.setSubmitting(false);
            }
        }
    });

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
                                <TextField
                                    error={!!(formik.touched.password && formik.errors.password)}
                                    fullWidth
                                    helperText={formik.touched.password && formik.errors.password}
                                    label="Password"
                                    name="password"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="password"
                                    value={formik.values.password}
                                />
                            </Stack>
                            {formik.errors.submit && (
                                <Typography
                                    color="error"
                                    sx={{ mt: 3 }}
                                    variant="body2"
                                >
                                    {formik.errors.submit}
                                </Typography>
                            )}
                            <Button
                                fullWidth
                                size="large"
                                sx={{ mt: 3, mb: 3 }}
                                type="submit"
                                variant="contained"
                            >
                                Continue
                            </Button>
                            <Typography
                                color="text.secondary"
                                variant="body2"
                            >
                                New on our platform?
                                &nbsp;
                                <a
                                    href="/auth/register"
                                >
                                    Create an account
                                </a>
                            </Typography>
                        </form>
                    </div>
                </Box>
            </Box>
        </div>
    );
};
