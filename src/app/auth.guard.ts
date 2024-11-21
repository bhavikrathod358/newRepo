import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { SignInService } from './sign-in.service';

export const authGuard: CanActivateFn = () => {
  const signInService = inject(SignInService); // Inject SignInService
  const router = inject(Router); // Inject Router for navigation

  // Check if the user is authenticated
  const isAuthenticated = signInService.isAuthenticated();
  // console.log('AuthGuard executed. Is Authenticated:', isAuthenticated);

  if (isAuthenticated) {
    // Allow access if authenticated
    return true;
  } else {
    // Redirect to login page if not authenticated
    console.log('User not authenticated. Redirecting to login page.');
    router.navigate(['/login']);
    return false; // Block access
  }
};
