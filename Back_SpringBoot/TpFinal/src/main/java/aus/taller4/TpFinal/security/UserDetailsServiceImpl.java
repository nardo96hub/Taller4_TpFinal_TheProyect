package aus.taller4.TpFinal.security;



import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import aus.taller4.TpFinal.modal.Usuario;
import aus.taller4.TpFinal.repository.UserRepository;


@Service
public class UserDetailsServiceImpl implements UserDetailsService {

	@Autowired
	UserRepository repo_user;

	@Override
	@Transactional
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Usuario user = repo_user.findByUsuario(username).get();
		return UserDetailsImpl.build(user);
	}
}
