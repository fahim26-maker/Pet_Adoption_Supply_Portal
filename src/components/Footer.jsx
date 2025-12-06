import React from 'react';

const Footer = () => {
    return (
        <div>
           <footer class="bg-gray-100 text-gray-700 px-6 py-10">
  <div class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
    

    <div>
      <h2 class="text-2xl font-bold text-pink-600">PawMart</h2>
      <p class="mt-2 text-sm">“PawMart connects local pet owners and buyers for adoption and pet care products.”</p>
      <div class="flex space-x-4 mt-4">
        <a href="#" aria-label="Twitter"><i class="fab fa-twitter text-xl"></i></a>
        <a href="#" aria-label="Instagram"><i class="fab fa-instagram text-xl"></i></a>
        <a href="#" aria-label="Email"><i class="fas fa-envelope text-xl"></i></a>
      </div>
    </div>

    <div>
      <h3 class="text-lg font-semibold mb-2">Company</h3>
      <ul class="space-y-1 text-sm">
        <li><a href="#">About Us</a></li>
        <li><a href="#">How It Works</a></li>
        <li><a href="#">Our Mission</a></li>
      </ul>
    </div>

    <div>
      <h3 class="text-lg font-semibold mb-2">Support</h3>
      <ul class="space-y-1 text-sm">
        <li><a href="#">Contact</a></li>
        <li><a href="#">FAQ</a></li>
        <li><a href="#">Help Center</a></li>
      </ul>
    </div>

    <div>
      <h3 class="text-lg font-semibold mb-2">Stay Updated</h3>
      <p class="text-sm mb-3">Subscribe to our newsletter for updates and tips.</p>
      <form class="flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-2">
        <input type="email" placeholder="Enter your email" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"/>
        <button type="submit" class="bg-pink-500 text-white px-3 py-2 rounded-md hover:bg-pink-600 w-full sm:w-auto">
          <i class="fas fa-paper-plane"></i>
        </button>
      </form>
    </div>
  </div>

  <div class="mt-10 border-t pt-6 text-sm text-center text-gray-500">
    <p>© 2025 PawMart. All rights reserved.</p>
    <div class="flex flex-wrap justify-center space-x-4 mt-2">
      <a href="#">Privacy Policy</a>
      <a href="#">Terms of Service</a>
      <a href="#">Cookie Policy</a>
    </div>
  </div>
</footer>
        </div>
    );
};

export default Footer;